document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        member.querySelector('.details').classList.toggle('show');
    });
});