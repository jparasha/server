module.exports = () => {
    console.log('****');
    
    return `
        <html>
            <body>
                <div style = "text-align: center">
                    <h3> I'd Like your input! </h3>
                    <p> please answer the following Question: </p>
                    <p>${survey.body}</p>
                </div>
                <div>
                    <a href = "http://localhost:3000"> Yes </a>
                </div>
                <div>
                    <a href = "http://localhost:3000"> No </a>
                </div>
            </body>
        </html>
    `;
}