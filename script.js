// Toggle visibility of category (JEE Mains/Advanced)
function toggleCategory(id) {
    const categoryContent = document.getElementById(id);
    categoryContent.style.display = categoryContent.style.display === 'none' ? 'block' : 'none';
}

// Toggle visibility of year-specific questions
function toggleYear(id) {
    const yearContent = document.getElementById(id);
    yearContent.style.display = yearContent.style.display === 'none' ? 'block' : 'none';
}

// Toggle visibility of specific shifts for Mains
function toggleShift(id) {
    const shiftContent = document.getElementById(id);
    shiftContent.style.display = shiftContent.style.display === 'none' ? 'block' : 'none';
}

// Toggle visibility of specific papers for Advanced
function togglePaper(id) {
    const paperContent = document.getElementById(id);
    paperContent.style.display = paperContent.style.display === 'none' ? 'block' : 'none';
}

// Toggle visibility of individual solutions
function toggleSolution(id) {
    const solution = document.getElementById(`solution${id}`);
    solution.style.display = solution.style.display === 'none' ? 'block' : 'none';
}
