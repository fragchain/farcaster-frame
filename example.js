import { FarcasterClient } from '@standard-crypto/farcaster-js';

// Initialize the Farcaster client
const farcasterClient = new FarcasterClient({
  mnemonic: 'your mnemonic phrase', // Replace with your mnemonic phrase
});

// Create a frame
const frame = {
  title: "My First Frame",
  description: "This is an example of a simple Farcaster frame.",
  image: "https://example.com/image.png", // URL of the image for the frame
  buttons: [
    {
      label: "Click Me",
      action: "post", // Action when the button is clicked (e.g., sending a POST request)
      target: "https://example.com/api/interact", // URL to handle the action
    },
  ],
};

// Publish the frame to Farcaster
async function publishFrame() {
  const cast = await farcasterClient.publishCast({
    text: "Check out my new frame!",
    embeds: [frame],
  });

  console.log("Frame published:", cast);
}

publishFrame();
