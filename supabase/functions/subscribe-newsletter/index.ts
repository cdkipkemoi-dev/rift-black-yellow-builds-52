
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const { email } = await req.json()

    console.log('Received newsletter subscription:', { email })

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Check if email already exists
    const { data: existingSubscription } = await supabase
      .from('newsletter_subscriptions')
      .select('id, is_active')
      .eq('email', email)
      .single()

    if (existingSubscription) {
      if (existingSubscription.is_active) {
        return new Response(
          JSON.stringify({ error: 'This email is already subscribed to our newsletter' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      } else {
        // Reactivate subscription
        const { error } = await supabase
          .from('newsletter_subscriptions')
          .update({ is_active: true, subscribed_at: new Date().toISOString() })
          .eq('email', email)

        if (error) {
          console.error('Database error updating subscription:', error)
          return new Response(
            JSON.stringify({ error: 'Failed to subscribe' }),
            { 
              status: 500, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
            }
          )
        }

        console.log('Newsletter subscription reactivated successfully')
        return new Response(
          JSON.stringify({ success: true, message: 'Successfully subscribed to newsletter!' }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }
    }

    // Insert new subscription
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }])

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to subscribe' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log('Newsletter subscription saved successfully')

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully subscribed to newsletter!' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing request:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
