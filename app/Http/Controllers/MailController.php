<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Mail\VerificationCodeMailable;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendVerificationCode(Request $request){
        $mail = new VerificationCodeMailable($request->all());
        Mail::to('lortizr@uniremingtonmanizales.edu.co')->send($mail);
        return "Send Successfull";
    }
}
