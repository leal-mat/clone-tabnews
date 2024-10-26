function status(request, response) {
  return response.status(200).json({ response: "200" });
}

export default status;
