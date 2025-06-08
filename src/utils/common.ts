export const parseError = (
    error: unknown,
    fallbackMessage: string = "An unexpected error occurred",
): string => {
    // Handle null or undefined
    if (!error) {
        return fallbackMessage;
    }

    // Handle Error objects
    if (error instanceof Error) {
        return error.message || fallbackMessage;
    }

    // Handle string errors
    if (typeof error === "string") {
        return error.trim() || fallbackMessage;
    }

    // Handle objects with message property
    if (typeof error === "object" && error !== null) {
        const errorObj = error as Record<string, unknown>;

        // Check for common error message properties
        if (typeof errorObj.message === "string") {
            return errorObj.message;
        }

        if (typeof errorObj.error === "string") {
            return errorObj.error;
        }

        if (typeof errorObj.text === "string") {
            return errorObj.text;
        }

        // Handle response objects (like fetch errors)
        if (
            typeof errorObj.response === "object" &&
            errorObj.response !== null &&
            typeof (errorObj.response as Record<string, unknown>).data === "object" &&
            (errorObj.response as Record<string, unknown>).data !== null &&
            typeof (
                (errorObj.response as Record<string, unknown>).data as Record<
                    string,
                    unknown
                >
            ).message === "string"
        ) {
            return (
                (errorObj.response as Record<string, unknown>).data as Record<
                    string,
                    unknown
                >
            ).message as string;
        }

        // Try to stringify the object as last resort
        try {
            const stringified = JSON.stringify(error);
            return stringified !== "{}" ? stringified : fallbackMessage;
        } catch {
            return fallbackMessage;
        }
    }

    // Handle primitive types
    if (typeof error === "number" || typeof error === "boolean") {
        return String(error);
    }

    return fallbackMessage;
};
