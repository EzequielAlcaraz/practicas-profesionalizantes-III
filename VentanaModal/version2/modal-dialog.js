class ModalDialog extends HTMLElement
{
	constructor()
    {
        super();

        this.classList.add("w3-modal", "w3-center");

		this.innerContent = document.createElement('div');
		this.innerContent.classList.add("w3-modal-content", "w3-container", "w3-animate-opacity", "w3-center", "w3-modal-div", "w3-green");

		this.buttonsContent = document.createElement('div');
		this.buttonsContent.classList.add("w3-modal-content", "w3-container", "w3-buttons-div", "w3-center");

		this.confirmButton = document.createElement('button');
		this.confirmButton.innerText = 'Confirm';
		this.confirmButton.classList.add("w3-button","w3-black", "w3-left");

		this.cancelButton = document.createElement('button');
		this.cancelButton.innerText = 'Cancel';
		this.cancelButton.classList.add("w3-button","w3-black", "w3-right");

    }

	connectedCallback()
	{
		this.appendChild(this.innerContent);
		this.appendChild(this.buttonsContent);
		this.buttonsContent.appendChild(this.confirmButton);
		this.buttonsContent.appendChild(this.cancelButton);

		this.confirmButton.addEventListener('click', ()=> this.hide() );
		this.cancelButton.addEventListener('click', ()=> this.hide() );

	}

	show()
	{
		this.style.display = 'block';
	}

	hide()
	{
		this.style.display = 'none';
	}
}


customElements.define('x-modal-dialog', ModalDialog );

export { ModalDialog };
