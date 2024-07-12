let codeEditor;

function setupCodePlaygrounds() {
    const codePlayground = document.getElementById('code-playground');
    if (codePlayground) {
        codeEditor = CodeMirror.fromTextArea(codePlayground, {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'default'
        });
    }
}

function runCode() {
    const code = codeEditor.getValue();
    const output = document.getElementById('code-output');
    output.innerHTML = '';

    try {
        // Redirect console.log to our output div
        const oldLog = console.log;
        console.log = function(...args) {
            output.innerHTML += args.join(' ') + '<br>';
        };

        // Run the code
        eval(code);

        // Restore console.log
        console.log = oldLog;
    } catch (error) {
        output.innerHTML = 'Error: ' + error.message;
    }
}
