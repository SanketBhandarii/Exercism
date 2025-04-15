export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    return this.api.fetch(text).then((result) => result.translation);
  }

  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }
    return Promise.all(texts.map((text) => this.free(text)));
  }

  request(text) {
    return new Promise((resolve, reject) => {
      const makeRequest = (attemptsLeft) => {
        this.api.request(text, (error) => {
          if (error === undefined) {
            resolve();
          } else if (attemptsLeft > 1) {
            makeRequest(attemptsLeft - 1);
          } else {
            reject(error);
          }
        });
      };
      makeRequest(3);
    });
  }

  premium(text, minimumQuality) {
    return this.api
      .fetch(text)
      .then((result) => {
        if (result.quality >= minimumQuality) {
          return result.translation;
        }
        return Promise.reject(new QualityThresholdNotMet(text));
      })
      .catch((error) => {
        if (
          error.constructor.name === "NotAvailable" ||
          error.message === "Not yet translated" ||
          error.message ===
            `The requested text "${text}" has not been translated yet.`
        ) {
          return this.request(text)
            .then(() => this.api.fetch(text))
            .then((result) => {
              if (result.quality >= minimumQuality) {
                return result.translation;
              }
              return Promise.reject(new QualityThresholdNotMet(text));
            });
        }
        return Promise.reject(error);
      });
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super("Batch is empty");
    this.name = "BatchIsEmpty";
  }
}

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(`Quality threshold not met for: ${text}`);
    this.name = "QualityThresholdNotMet";
  }
}
