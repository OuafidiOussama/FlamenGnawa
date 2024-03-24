export const extractErrorMessage = async (htmlResponse) => {
  try {
    const errorRegex = /<pre>(.*?)<br>/s;
    const match = htmlResponse.match(errorRegex);
    const errorMessage = match ? match[1] : "Error message not found";
    return errorMessage;
  } catch (error) {
    console.error("Something went wrong!", error);
    return "Something went wrong!";
  }
};
