import { FormBuilder, FormGroup } from "@angular/forms";

export abstract class Form {
    public form!: FormGroup
    protected isSendForm: boolean = false;

    constructor(_fb: FormBuilder) { }

    protected abstract createForm(): void;
}