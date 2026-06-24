package org.vote.dtos;

import lombok.Data;

@Data
public class VoteDTO {

    private Long id;
    private Long optionId;
    private Long pollId;
    private Long postedBy;

}
