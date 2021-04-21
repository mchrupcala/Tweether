const TweetStorage = artifacts.require('TweetStorage');
const TweetController = artifacts.require('TweetController');

const utils = require('../utils')
const { assertVMException } = utils

contract('tweets', () => {

    it ('can get tweet with controller', async () => {
        const controller = await TweetController.deployed();

        const tx = await controller.createTweet(1, "Hello world!");

        assert.isOk(tx);
    })

    it("can't create tweet without controller", async () => {
        const storage = await TweetStorage.deployed()

        try {
            const tx = await storage.createTweet(1, 'michael')
            assert.fail();
        } catch (err) {
            assertVMException(err);
        }
    })
})