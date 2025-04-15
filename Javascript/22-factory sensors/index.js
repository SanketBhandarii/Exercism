export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`Overheating detected: ${temperature}`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidity) {
  if (humidity > 70) throw new Error("Humidity too high");
}

export function reportOverheating(temperature) {
  if (temperature === null) throw new ArgumentError("Sensor is broken");
  if (temperature > 500) throw new OverheatingError(temperature);
}

export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature < 600) {
        actions.alertOverheating();
      } else {
        actions.shutdown();
      }
    } else {
      throw error;
    }
  }
}
