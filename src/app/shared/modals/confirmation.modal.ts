import {Component, Input, OnInit} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-modal',
  template: `
    <div class="modal-header modal-title">
      <h2>Confirmation</h2>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="activeModal.dismiss('Close click');">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
      <p class="text-center mx-auto mt-2 mb-2 text-danger clsModalUserMessage">{{message}}</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary float-right mr-1" (click)="activeModal.close('Close click')" primary="true">Yes</button>
      <button class="btn btn-default float-right" (click)="activeModal.dismiss('Close click');">No</button>
    </div>
  `
})
export class ConfirmationModalComponent {
  @Input() message: String = "Are you sure?";

  constructor(public activeModal: NgbActiveModal) {
  }
}