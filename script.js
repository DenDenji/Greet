function showQuestion() {
    document.getElementById('question').style.display = 'block';
}

function showPicture() {
    document.getElementById('picture').style.display = 'block';
    document.getElementById('question').style.display = 'none';
}

function moveNo() {
    const noBtn = document.getElementById('noBtn');
    
    // Random position near the Yes button (within 150px radius)
    const randomAngle = Math.random() * Math.PI * 2;
    const randomDistance = 80 + Math.random() * 70; // 80-150px away
    
    const offsetX = Math.cos(randomAngle) * randomDistance;
    const offsetY = Math.sin(randomAngle) * randomDistance;
    
    noBtn.style.position = 'relative';
    noBtn.style.left = offsetX + 'px';
    noBtn.style.top = offsetY + 'px';
}