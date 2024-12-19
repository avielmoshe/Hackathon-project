import Provider from "../models/provider.js";
import User from "../models/userModel.js";

export const crateNewProvider = async (req, res) => {
  const { providerType, bannerImg, bio, location, webLink } = req.body;
  if (!providerType && !bio && !webLink && !location) {
    return res
      .status(400)
      .send({ error: "providerType or content are required" });
  }
  const userid = req.user.id;
  const existingProvider = await Provider.findOne({ userID: userid });
  if (existingProvider) {
    return res.status(400).json({ message: "provider already exists" });
  }
  try {
    const newProvider = new Provider({
      providerType: providerType,
      bannerImg: bannerImg,
      bio: bio,
      location: location,
      webLink: webLink,
      userID: userid,
    });

    const savedProvider = await newProvider.save();
    res.status(201).send({
      status: "provider Succefully created",
      savedProvider,
    });
  } catch (error) {
    console.error("Error creating provider:", error);
    res.status(500).json({ error: "Server error. Could not create provider." });
  }
};

export const getProviderByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).send({ error: "userId is required" });
    }
    const providerData = await Provider.findOne({ userID: userId }).populate({
      path: "userID",
      select: "profileImg username phone email",
    });

    if (!providerData) {
      return res.status(404).send({ error: "Provider not found" });
    }

    res.status(200).send(providerData);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send({ error: "Server error" });
  }
};

export const updateProvider = async (req, res) => {
  try {
    const { providerType, bannerImg, bio, location, webLink } = req.body;
    const userId = req.user.id;
    const updateData = {};
    if (providerType) updateData.providerType = providerType;
    if (bannerImg) updateData.bannerImg = bannerImg;
    if (bio) updateData.bio = bio;
    if (location) updateData.location = location;
    if (webLink) updateData.webLink = webLink;

    const oldProvider = await Provider.findOne({ userID: userId });

    const updateProvider = await Provider.findByIdAndUpdate(
      oldProvider._id,
      updateData,
      {
        new: true,
      }
    );

    res.status(201).send({
      message: "profile updated successfully",
      updateProvider,
    });
  } catch (error) {
    console.error("Error updating provider", error);
    res.status(500).json({ error: "Server error" });
  }
};
