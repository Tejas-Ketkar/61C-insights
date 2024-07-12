document.addEventListener('DOMContentLoaded', () => {
    loadTableOfContents();
    setupNavigation();
});

function loadTableOfContents() {
    const toc = document.getElementById('table-of-contents');
    // Fetch the table of contents from a JSON file or generate it dynamically
    const tocItems = [
        { title: 'Topic 1', url: 'pages/topic1.html' },
        { title: 'Topic 2', url: 'pages/topic2.html' },
        { title: 'Topic 3', url: 'pages/topic3.html' },
    ];

    const ul = document.createElement('ul');
    tocItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.title;
        li.appendChild(a);
        ul.appendChild(li);
    });

    toc.appendChild(ul);
}

function setupNavigation() {
    const content = document.getElementById('content');
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage(link.href);
        });
    });
}

function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            setupInteractiveElements();
        })
        .catch(error => console.error('Error loading page:', error));
}

function setupInteractiveElements() {
    // Set up animations, code playgrounds, etc.
    setupAnimations();
    setupCodePlaygrounds();
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
}
