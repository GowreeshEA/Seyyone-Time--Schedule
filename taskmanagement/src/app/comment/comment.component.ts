// comment.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: string[] = [];
  newComment: string = '';

  ngOnInit() {
    // Load comments from local storage when the component is initialized
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }

  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment);
      this.newComment = '';
      this.saveCommentsToLocalStorage();
    }
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1);
    this.saveCommentsToLocalStorage();
  }

  private saveCommentsToLocalStorage() {
    // Save comments to local storage
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  onFileSelected(event: any) {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      // Handle the selected file as needed (e.g., upload to a server or display preview)
      console.log('Selected File:', selectedFile);
    }
  }
}
