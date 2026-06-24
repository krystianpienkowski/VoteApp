package org.vote.dtos;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class PollDTO {

    private Long id;
    private String question;
    private Date postedDate;
    private Date expiredAt;
    private List<String> options;
    private Integer totalVoteCount;
    private boolean isExpired;

    private Long userId;
    private String userName;

    private List<OptionsDTO> optionsDTOS;

    private boolean voted;
}
