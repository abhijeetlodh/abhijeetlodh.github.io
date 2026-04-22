// SYSTEM DESIGN INTERACTION
function toggle(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === "block" ? "none" : "block";
}

// NODE HOVER GLOW
document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('mouseenter', () => {
        node.style.boxShadow = "0 0 30px rgba(0,245,212,0.5)";
    });
    node.addEventListener('mouseleave', () => {
        node.style.boxShadow = "";
    });
});
