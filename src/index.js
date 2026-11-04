export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        success: true,
        message: "AI Automation API is running",
        status: "healthy"
      });
    }

    return Response.json({
      success: true,
      name: "AI Automation API",
      version: "1.0.0",
      message: "Welcome to AI Automation API Platform"
    });
  }
};
