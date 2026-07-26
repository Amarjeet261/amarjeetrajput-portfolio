import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.GEMINI_API_KEY) {
    // Return a mocked response for UI testing
    return new Response(
      'It looks like you haven\'t configured the GEMINI_API_KEY yet! Once you add it to your `.env.local`, I will be able to answer your questions using Google AI.', 
      { status: 200 }
    );
  }

  try {
    const result = streamText({
      model: google('gemini-1.5-pro-latest'),
      system: 'You are Amarjeet Rajput\'s helpful personal assistant. You help visitors to his portfolio by answering questions about him, his projects, and his skills. Be concise, friendly, and professional.',
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    return new Response('An error occurred with the AI integration.', { status: 500 });
  }
}
