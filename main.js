let inputs = document.querySelectorAll('.controls input')
    // console.log(inputs);

function handleUpdate() {
    // console.log(this.value);
    // console.log(this.dataset); //an array of all data attributes
    const suffix = this.dataset.sizing || ''
        // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + suffix)

}

inputs.forEach((parameter) => parameter.addEventListener('change', handleUpdate));
inputs.forEach((parameter) => parameter.addEventListener('mousemove', handleUpdate));