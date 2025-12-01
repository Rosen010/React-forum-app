/**
 * Get user initials from email address
 * @param {string} email - User's email address
 * @returns {string} Uppercase initials (max 2 characters)
 * 
 * @example
 * getUserInitials('john.doe@example.com') // returns 'JD'
 * getUserInitials('jane@example.com') // returns 'J'
 */
export function getUserInitials(email) {
    if (!email) {
        return '';
    };
    
    return email
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
}