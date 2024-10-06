import { CampaignStatus } from "./campaign-status.enum";
import { Sender } from "./sender.interface";

export interface Campaign {
    id: number;
    name: string;
    subject: string;
    previewText: string;
    status: CampaignStatus;
    sender: Sender;
    htmlContent: string;
    sentDate: string; // Format: YYYY-MM-DDTHH:mm:ss.SSSZ
}