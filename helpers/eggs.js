/*
$red: #F44336;
$purple: #673AB7;
$blue: #2196F3;
$teal: #009688;
$green: #43A047;
$yellow: #FFEB3B;
$orange: #FF5722;
$black: #000;
$grey: #757575;
$coal: #424242;

*/

const eggColor = {
    "1": "coal",
    "twelfth": "coal",
    "2": "orange",
    "sixth": "orange",
    "3": "yellow",
    "quarter": "yellow",
    "4": "blue",
    "third": "blue",
    "5": "coal",
    "6": "red",
    "half": "red",
    "7": "grey",
    "8": "purple",
    "two-thirds": "purple",
    "9": "yellow",
    "9": "three-quarters",
    "10": "green",
    "11": "red",
    "12": "teal",
    "full": "teal"
}

function parse(n) {
    if (eggColor[n]) {
        process.stdout.write(
`<div class="egg-${n}">
    <div class="shell ${eggColor[n]}">
        .egg-${n}
    </div>
</div>
`
        );
    }
}

process.stdin.on('data', (chunk) => {
    var input = chunk.toString().trim();
    if (input != 'quit') {
        parse(chunk.toString().trim());
    }
    else {
        process.exit(0);
    }
});
