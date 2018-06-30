import { Component, ElementRef, Input, Pipe, PipeTransform, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogType } from './dialog-type';


@Component({
    selector: 'dialog-popup',
    templateUrl: 'dialog-popup.component.html',
    styleUrls: ['dialog-popup.component.css'],
    providers: [NgbModal,NgbActiveModal]
})

export class DialogPopupComponent implements OnInit {

    @Input() type: string = DialogType.CONFIRMATION;
    @Input() title: string = "Confirmation";
    @Input() message: string = "";

    @Input() initiationDate: string = "";
    @Input() iepDate: string = "";

    @Input() yesButtonLabel: string = "Yes";
    @Input() noButtonLabel: string = "No";

    yesDisabled: boolean = false;
    isMeetingDate: boolean = false;
    acceptSelected: boolean = false;
    isYesVisible: boolean = true;
    noBtnIcon: string = "fa fa-times";
    noBtnCss: string = "btn-secondary";
    className: string = "notification-info";

    constructor(private elRef: ElementRef,
        public activeModal: NgbActiveModal,
        private modalService: NgbModal) { }

    ngOnInit() {
        switch (this.type) {
            case DialogType.ALERT:
                if (this.title == "Confirmation") this.title = "Alert";
                if (this.noButtonLabel == "No") this.noButtonLabel = "Ok";
                this.className = "notification-error";
                this.noBtnIcon = "fa fa-check";
                this.noBtnCss = "btn-primary";
                this.isYesVisible = false;
                break;
            case DialogType.WARNING:
                if (this.title == "Confirmation") this.title = "Warning";
                if (this.noButtonLabel == "No") this.noButtonLabel = "Ok";
                this.className = "notification-warning";
                this.isYesVisible = false;
                break;
            case DialogType.MEETING_DATE_CONFIRMATION:
                if (this.yesButtonLabel == "Yes") this.yesButtonLabel = "Ok";
                if (this.noButtonLabel == "No") this.noButtonLabel = "Cancel";
                this.isMeetingDate = true;
                this.setYesStatus();
                this.className = "notification-confirmation";
                break;
            case DialogType.CONFIRMATION:
                 this.className = "notification-confirmation";
                 break;
            case DialogType.CONFIRMATION_WARNING:
                 this.className = "notification-warning";
                 break;
            default:
                break;
        }
    }

    onAcceptChange(event) {
        this.acceptSelected = event.target.checked;
        this.setYesStatus();
    }

    setYesStatus()
    {
        this.yesDisabled = this.isMeetingDate && !this.acceptSelected!;
    }
}
