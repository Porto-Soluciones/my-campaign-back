const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  campaignType: {
    type: String,
    required: true,
  },
  candidateName: {
    type: String,
    required: true,
    uppercase: true,
  },
  campaignSlogan: {
    type: String,
    required: true,
  },
  campaignAdress: {
    type: String,
  },
  campaignLogo: {
    type: String,
    default:'https://res.cloudinary.com/mycampaign/image/upload/v1688045053/lw7bowyb8jbjw0eguaue.jpg',
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Campaign', CampaignSchema);
