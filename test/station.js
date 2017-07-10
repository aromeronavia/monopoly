import Station from '../monopoly/station';

describe('Station', () => {
  const buildStation = () => new Station();

  it('should build a station', () => {
    const station = buildStation();
    expect(station.getCost()).to.equals(100);
  });

  it('should charge the rent with one station', () => {
    const station = buildStation();
    expect(station.getRent()).to.equals(50);
  });
});
