import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { YouTubeEmbed } from 'react-social-media-embed';

const ArchiveCard = () => {
  return (
    <div className="w-full h-72 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        {/* Add your video here */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={390} height={220} style={{ borderRadius: "16px" }} />
        </div>
    </div>

  );
};

export default ArchiveCard;
