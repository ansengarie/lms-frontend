export function checkRole(userRole, allowedRoles) {
    return allowedRoles.includes(userRole);
}

// if (!checkRole(currentUser.role, ["Admin", "Instructor"])) {
//     return next("/unauthorized");
// }
