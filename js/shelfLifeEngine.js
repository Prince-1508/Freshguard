// Q10 model: relative deterioration rate = Q10 ^ ((T - Tref) / 10).
// Equivalent age is accumulated at the reference temperature.
// This is an educational approximation; parameters require produce-specific validation.
window.ShelfLifeEngine = {
  rate(temp, referenceTemp, q10) {
    return Math.pow(Number(q10), (Number(temp) - Number(referenceTemp)) / 10);
  },
  equivalentAge(segments, referenceTemp, q10) {
    return segments.reduce((sum, s) => sum + (Number(s.hours) / 24) * this.rate(s.temp, referenceTemp, q10), 0);
  },
  calculate(batch) {
    const journey = batch.journey || [];
    const journeyAge = journey.length
      ? this.equivalentAge(journey, batch.referenceTemp, batch.q10)
      : 0;
    // The batch's manually entered age is used as its current accumulated reference-age.
    // For seeded examples, age is the declared cumulative age, not added again to journeyAge.
    const consumed = Number(batch.age ?? journeyAge);
    const remaining = Number(batch.shelfLife) - consumed;
    const pct = Math.max(0, Math.min(100, remaining / Number(batch.shelfLife) * 100));
    let status = remaining <= 2 ? "At risk" : remaining <= 5 ? "Watch" : "Healthy";
    return {consumed, remaining, pct, status, currentRate:this.rate(batch.temperature,batch.referenceTemp,batch.q10), journeyAge};
  },
  scenario({temperature, referenceTemp, q10, hours}) {
    const rate = this.rate(temperature, referenceTemp, q10);
    const equivalentDays = hours / 24 * rate;
    const baselineDays = hours / 24;
    return {rate, equivalentDays, extraDays:equivalentDays-baselineDays};
  }
};