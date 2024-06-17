import User from '@/models/userModels';
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

interface MailerProps{
    email: string,
    emailType: string,
    first_name: string
}

export default async function Mailer({email,emailType,first_name}: MailerProps) {
    try {

        const hash = await bcrypt.hash(email, 10);

        const Token = Buffer.from(hash).toString('base64');

        const hashedToken = Token
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        if(emailType === "verify"){
            try {
                await User.findOneAndUpdate({email: email},{
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000,
                });
    
            } catch (error) {
                return NextResponse.json({
                    error: [error, "something wrong with mail services please try again later"]
                })
            }
        }

        const transport = nodemailer.createTransport({
            service: "gmail",
            secure : true,
            port : 465,
            auth: {
                user: "officialknowabouttech@gmail.com",
                pass: "ubvo yjkd uumj ckow"
    
            }
        });
    
        const mailOptions = {
            from : "officialknowabouttech@gmail.com",
            to : email,
            subject : emailType === "verify"? "verify your email address": "Reset Password",
            html: `<p>Hello ${first_name}, </br>Click<a href="${process.env.DOMAIN_NAME}/verify/${hashedToken}"> here </a>to verify your mail for Local ecommerce store <br/> Thank you for choosing us.</p>`
        };

        const mailResponse = await transport.sendMail(mailOptions)
            return mailResponse 
        
    } catch (error) {
        return NextResponse.json({
            error: error
        },{
            status: 500
        })
    }
}