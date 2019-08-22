function sayHiBye(first, last) {
    function getFullName(first, last) {
        return first + " " + last;
    }

    alert("Hi " + getFullName(first, last));

    alert("Bye " + getFullName(first, last));
}

sayHiBye("JJ", "KK");