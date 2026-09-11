describe('MostEdge TV Launch', () => {

    it('should launch MostEdge TV application', async () => {

        await browser.pause(5000);

        const packageName = await browser.getCurrentPackage();

        console.log(
            'Current Package:',
            packageName
        );

        expect(packageName)
            .toBe('com.mostedge.tv');

    });

});