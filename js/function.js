function isMeetingInWorkHours(startTimeOfDay, endTimeOfDay, meetingStartTime, meetingDurationMinutes) {
  const start = new Date(`${startTimeOfDay}T00:00:00`);
  const end = new Date(`${endTimeOfDay}T00:00:00`);
  const meetingEndTime = new Date(new Date(meetingStartTime).getTime() + meetingDurationMinutes * 60 * 1000);
  return !(meetingEndTime > end || meetingStartTime < start);
}

isMeetingInWorkHours('08:00', '17:30', '14:00', 90);
