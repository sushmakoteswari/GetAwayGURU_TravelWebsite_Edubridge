import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });// Initialize at the declaration
  submitted = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
   
  }
  submitFeedback() {
    if (this.feedbackForm.valid) {
      this.submitted = true;
      this.feedbackForm.reset();
    }
  }
}
