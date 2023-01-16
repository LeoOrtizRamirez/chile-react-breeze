<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

use App\Models\User;

class VerificationCodeMailable extends Mailable
{
    use Queueable, SerializesModels;

    public $user = "";

    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Restablecer Contraseña',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        $user = User::where('email', $this->user['email'])->first();
        
        if(isset($user)){
            $verification_code = $user->verification_code;
            
        }else{
            dd("El usuario no existe");
        }
        return new Content(
            view: 'emails.verificationcode',
            with: [
                'verificationCode' => $verification_code,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
