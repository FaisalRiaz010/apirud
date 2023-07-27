const User=require ('../model/user');
// to list item
exports.lisItems_user = async (req, res) => {

        const { tokenId, listItem } = req.body;

        // Find the NFT record that matches the nftId
        const ItemRecord = await Item.findOne({ tokenId });

        if (!ItemRecord) {
            // If use with the given nftId does not exist, return an error
            res.status(404)
            throw new Error("User does not exsits!")
        }

        // Create a new record in the listnft table
        const newLisItem = new User({

           user_id: ItemRecord.id, // Associate the Nft object ID with the listnft record
            token_id: ItemRecord.tokenId,
            email: listItem // Copy the token_id from the Nft record (if needed)
        });

        // Save the newListNft record to the database
        await newLisItem.save();

        // Return a success response
        res.status(201).json({ success: true, message: 'User listed successfully' });

    }

