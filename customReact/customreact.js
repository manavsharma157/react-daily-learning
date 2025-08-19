function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    //Better Approach
    for (const prop in reactElement.props) {
        if(prop === 'children') continue; // Skip children
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blanks'
    },
    children: 'Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)