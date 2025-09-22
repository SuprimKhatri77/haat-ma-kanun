import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";
import { AlertTriangle, CheckSquare, Flag, Gavel, Users } from "lucide-react";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {/* Andolan Victory */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Day 1
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <Flag />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Gen Z Andolan Victory
          </Typography>
          <Typography>
            Youth-led movement succeeds after sacrifice and unity.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Agreement Sent to President */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Day 2
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <Users />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Agreement Drafted
          </Typography>
          <Typography>
            Proposal for new PM submitted by Gen Z leaders to President.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* President Appoints PM */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <Gavel />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            PM Appointment
          </Typography>
          <Typography>
            President appoints Sushila Karki as Prime Minister.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Election Date Announced */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="info">
            <CheckSquare />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Election Date Set
          </Typography>
          <Typography>
            Election scheduled for Falgun 21. Citizens prepare for voting.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Warning: Voter Registration */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error">
            <AlertTriangle />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            ⚠️ Missed Voter Registration
          </Typography>
          <Typography>
            Important legal gap: Citizens registering after date cannot vote.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
