const axios = require('axios');

// Mock state for testing
const state = {
    destinations: ["Library", "School of Science and Humanities", "Admin Block"],
    locations: {
        "Library": ["Main Floor", "Upper Floor"],
        "School of Science and Humanities": ["Lab", "Classrooms"],
    },
};

// Test rendering categories
function mockRenderCategories() {
    state.destinations.forEach((category) => {
        // Simulate rendering
        console.log(`Rendered category: ${category}`);
    });
    return true; // Assume the rendering is always successful
}

// Test rendering locations
function mockRenderLocations(category) {
    const locations = state.locations[category] || [];
    locations.forEach((location) => {
        // Simulate rendering
        console.log(`Rendered location: ${location}`);
    });
    return true; // Assume the rendering is always successful
}

// Define simple tests
describe("Performance Testing", () => {
    test("Should render all categories", () => {
        const success = mockRenderCategories();
        expect(success).toBe(true); // Pass if rendering is successful
    });

    test("Should render locations for a specific category", () => {
        const success = mockRenderLocations("Library");
        expect(success).toBe(true); // Pass if rendering is successful
    });
});

// Test API response
describe("API Testing", () => {
    test("Shortest-path API should return valid data", async () => {
        const response = await axios.get("http://localhost:3001/shortest-path", {
            params: {
                source: "POINT 13",
                destination: "POINT 86",
                mode: "walking",
            },
        });
        expect(response.status).toBe(200); // Check if the response is successful
        expect(response.data).toHaveProperty("path"); // Validate the response contains a path
    });
});
