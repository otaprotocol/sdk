// Copyright 2025 Trana, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
    ActionCodesBaseError,
    InvalidCodeFormatError,
    CodeNotFoundError,
    ActionSubmissionFailedError,
    TransactionDecodingError,
    UnauthorizedError,
    ExpiredCodeError,
    UnsupportedPrefixError,
    TaskNotFoundError,
    TaskTimeoutError,
    TaskStillInProgressError,
} from './error';

describe('Error classes', () => {
    test('InvalidCodeFormatError', () => {
        const err = new InvalidCodeFormatError();
        expect(err).toBeInstanceOf(ActionCodesBaseError);
        expect(err.code).toBe('INVALID_CODE_FORMAT');
        expect(err.message).toMatch(/format/);
    });

    test('CodeNotFoundError', () => {
        const err = new CodeNotFoundError();
        expect(err.code).toBe('CODE_NOT_FOUND');
        expect(err.message).toMatch(/not be found/);
    });

    test('ActionSubmissionFailedError', () => {
        const err = new ActionSubmissionFailedError();
        expect(err.code).toBe('ACTION_SUBMISSION_FAILED');
        expect(err.message).toMatch(/Failed to submit/);
    });

    test('TransactionDecodingError', () => {
        const err = new TransactionDecodingError();
        expect(err.code).toBe('TRANSACTION_DECODING_ERROR');
        expect(err.message).toMatch(/decode/);
    });

    test('UnauthorizedError', () => {
        const err = new UnauthorizedError();
        expect(err.code).toBe('UNAUTHORIZED');
        expect(err.message).toMatch(/not authorized/);
    });

    test('ExpiredCodeError', () => {
        const err = new ExpiredCodeError();
        expect(err.code).toBe('EXPIRED_CODE');
        expect(err.message).toMatch(/expired/);
    });

    test('UnsupportedPrefixError', () => {
        const err = new UnsupportedPrefixError();
        expect(err.code).toBe('UNSUPPORTED_PREFIX');
        expect(err.message).toMatch(/prefix/);
    });

    test('TaskNotFoundError', () => {
        const err = new TaskNotFoundError('abc123');
        expect(err.code).toBe('TASK_NOT_FOUND');
        expect(err.message).toMatch(/abc123/);
    });

    test('TaskTimeoutError', () => {
        const err = new TaskTimeoutError('abc123', 5000);
        expect(err.code).toBe('TASK_TIMEOUT');
        expect(err.message).toMatch(/abc123/);
        expect(err.message).toMatch(/5000/);
    });

    test('TaskStillInProgressError', () => {
        const err = new TaskStillInProgressError('abc123', 'pending');
        expect(err.code).toBe('TASK_STILL_IN_PROGRESS');
        expect(err.message).toMatch(/abc123/);
        expect(err.message).toMatch(/pending/);
    });
}); 