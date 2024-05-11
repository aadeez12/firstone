const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/calculate" method="post">
            <label for="num1">Enter first number:</label>
            <input type="number" name="num1" id="num1"><br>
            <label for="num2">Enter second number:</label>
            <input type="number" name="num2" id="num2"><br>
            <input type="submit" value="Calculate">
        </form>
    `);
});

app.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    const sum = num1 + num2;

    res.send(`The sum is: ${sum}`);
});

app.listen(000, () => {
    console.log('Server is running on port 000');
});