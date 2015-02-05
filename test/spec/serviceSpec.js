describe("eq service", function() {
  var eqService, httpBackend;

  beforeEach(module("myapp"));

  beforeEach(inject(function(_eqService_, $httpBackend) {
    eqService = _eqService_;
    httpBackend = $httpBackend;
  }));

  it("should return the same set of data as the public API does", function() {
    httpBackend.whenGET("http://localhost:5000/").respond({
      data: {
        count: "21740",
        earthquakes: [{
          src: "us",
          eqid: "c000is61",
          timedate: "2013-07-29 22:22:48",
          lat: "7.6413",
          lon: "93.6871",
          magnitude: "4.6",
          depth: "40.90",
          region: "Nicobar Islands, India region"
        }, {
          src: "us",
          eqid: "c000is4s",
          timedate: "2013-07-29 21:52:12",
          lat: "-57.7816",
          lon: "-25.3260",
          magnitude: "5.2",
          depth: "53.50",
          region: "South Sandwich Islands region"
        }]
      }
    });

    eqService.eq().then(function(data) {
      expect(data.data).toEqual({
        count: "21740",
        earthquakes: [{
          src: "us",
          eqid: "c000is61",
          timedate: "2013-07-29 22:22:48",
          lat: "7.6413",
          lon: "93.6871",
          magnitude: "4.6",
          depth: "40.90",
          region: "Nicobar Islands, India region"
        }, {
          src: "us",
          eqid: "c000is4s",
          timedate: "2013-07-29 21:52:12",
          lat: "-57.7816",
          lon: "-25.3260",
          magnitude: "5.2",
          depth: "53.50",
          region: "South Sandwich Islands region"
        }]
      });
    });

    httpBackend.flush();
  });

});