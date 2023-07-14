function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`You have ordered a ${size} shirt with the message: "${message}"`);
  }
  
  // Call the function with default values
  make_shirt(); // Large shirt with default message
  make_shirt("medium"); // Medium shirt with default message
  make_shirt("small", "Hello OpenAI!"); // Custom size and message
  