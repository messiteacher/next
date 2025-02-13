package com.example.next.domain.post.comment.dto;

import com.example.next.domain.post.comment.entity.Comment;
import lombok.Getter;
import org.springframework.lang.NonNull;

import java.time.LocalDateTime;

@Getter
public class CommentDto {

    @NonNull
    private long id;
    @NonNull
    private String content;
    @NonNull
    private long postId;
    @NonNull
    private long authorId;
    @NonNull
    private String authorName;
    @NonNull
    private LocalDateTime createdDate;
    @NonNull
    private LocalDateTime modifiedDate;

    public CommentDto(Comment comment) {

        this.id = comment.getId();
        this.content = comment.getContent();
        this.postId = comment.getPost().getId();
        this.authorId = comment.getAuthor().getId();
        this.authorName = comment.getAuthor().getNickname();
        this.createdDate = comment.getCreatedDate();
        this.modifiedDate = comment.getModifiedDate();
    }
}
