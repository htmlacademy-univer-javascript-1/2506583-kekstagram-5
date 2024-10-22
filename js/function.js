function isMeetingInWorkHours(startTimeOfDay, endTimeOfDay, meetingStartTime, meetingDurationMinutes) {
  const start = new Date(`${startTimeOfDay}T00:00:00`); // Преобразуем время начала рабочего дня в объект Date
  const end = new Date(`${endTimeOfDay}T00:00:00`);   // Преобразуем время окончания рабочего дня в объект Date
  const meetingEndTime = new Date(new Date(meetingStartTime).getTime() + meetingDurationMinutes * 60 * 1000); // Рассчитываем окончание встречи

  return !(meetingEndTime > end || meetingStartTime < start); // Проверка выхода за рамки рабочего дня
}
