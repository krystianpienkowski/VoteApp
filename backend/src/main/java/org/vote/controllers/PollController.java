package org.vote.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vote.dtos.PollDTO;
import org.vote.services.PollService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@CrossOrigin("*")
public class PollController {

    private final PollService pollService;

    @PostMapping("/poll")
    public ResponseEntity<?> postPoll(@RequestBody PollDTO pollDTO) {
        PollDTO createdPollDTO = pollService.postPoll(pollDTO);
        if (createdPollDTO != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPollDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/poll/{id}")
    public ResponseEntity<?> deletePoll(@PathVariable Long id) {
        pollService.deletePoll(id);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/polls")
    public ResponseEntity<?> getAllPolls() {
        return ResponseEntity.ok(pollService.getAllPolls());
    }

    @GetMapping("/my-polls")
    public ResponseEntity<?> getMyPolls() {
        return ResponseEntity.ok(pollService.getMyPolls());
    }

    @PostMapping("/poll/{pollId}/vote/{optionId}")
    public ResponseEntity<?> vote(
            @PathVariable Long pollId,
            @PathVariable Long optionId
    ) {
        pollService.vote(pollId, optionId);
        return ResponseEntity.ok().build();
    }
}
