import { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Define a custom interface that extends JwtPayload to include the 'id' field
interface CustomJwtPayload extends JwtPayload {
    id: string;
}

// Function to extract 'id' from the JWT token
export const getDataFromToken = (request: NextRequest): string | null => {
    try {
        // Get the JWT token from cookies
        const token = request.cookies.get("token")?.value || "";

        // Verify and decode the JWT token
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN!) as CustomJwtPayload;

        // Extract and return the 'id' from the decoded token
        return decodedToken.id;
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
};
